#!/usr/bin/env python3
"""
count_commits.py

Count git commits over a given calendar month across multiple repos.

 ./scripts/count_commits.py  -r list_of_repos.txt -m 2025-05
"""

import argparse
import datetime
import subprocess
import os
import sys

def parse_args():
    p = argparse.ArgumentParser(
        description="Count git commits across multiple repos for a given YYYY-MM month"
    )
    p.add_argument(
        "--repos", "-r", required=True,
        help="Path to a text file with one repo URL or path per line"
    )
    p.add_argument(
        "--month", "-m", required=True,
        help="Target month in YYYY-MM format, e.g. 2023-08"
    )
    p.add_argument(
        "--workdir", "-w", default="repos",
        help="Directory under which to clone repos (default: ./repos)"
    )
    return p.parse_args()

def month_range(year:int, month:int):
    """Return (start_date, next_month_date) as ISO strings."""
    start = datetime.date(year, month, 1)
    if month == 12:
        nxt = datetime.date(year+1, 1, 1)
    else:
        nxt = datetime.date(year, month+1, 1)
    # We tell git --until=next_month (non‐inclusive), so we don't have to count days
    return start.isoformat(), nxt.isoformat()

def run(cmd, cwd=None):
    """Run a shell command, returning (exitcode, stdout, stderr)."""
    proc = subprocess.Popen(
        cmd, cwd=cwd, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True
    )
    out, err = proc.communicate()
    return proc.returncode, out.strip(), err.strip()

def prepare_repo(target, workdir):
    """
    If target looks like a URL, clone it under workdir.
    If it's a local path, return it directly.
    """
    if os.path.isdir(target):
        return os.path.abspath(target)
    # Heuristic: if it starts with http or git@, we treat as URL
    if target.startswith("http://") or target.startswith("https://") or "@" in target:
        name = os.path.splitext(os.path.basename(target))[0]
        dest = os.path.join(workdir, name)
        if not os.path.isdir(dest):
            print(f"Cloning {target} → {dest} …")
            code, out, err = run(["git", "clone", "--quiet", target, dest])
            if code != 0:
                print(f"Error cloning {target}: {err}", file=sys.stderr)
                return None
        return os.path.abspath(dest)
    # Otherwise, error
    print(f"Unrecognized repo entry (not URL or dir): {target}", file=sys.stderr)
    return None

def count_commits(repo_path, since, until):
    """
    Use git rev-list --count on all branches between since (inclusive)
    and until (exclusive).
    """
    cmd = [
        "git", "rev-list", "--all",
        f"--since={since} 00:00",
        f"--until={until} 00:00",
        "--count"
    ]
    code, out, err = run(cmd, cwd=repo_path)
    if code != 0:
        print(f"Error running git rev-list in {repo_path}: {err}", file=sys.stderr)
        return 0
    try:
        return int(out)
    except ValueError:
        return 0

def main():
    args = parse_args()

    try:
        year, month = map(int, args.month.split("-", 1))
    except Exception:
        print("Error: --month must be in YYYY-MM format", file=sys.stderr)
        sys.exit(1)

    since, until = month_range(year, month)

    # ensure workdir exists
    os.makedirs(args.workdir, exist_ok=True)

    # read list of repos
    with open(args.repos) as f:
        lines = [l.strip() for l in f if l.strip() and not l.startswith("#")]

    total = 0
    print(f"\nCounting commits from {since} (inclusive) to {until} (exclusive):\n")
    for entry in lines:
        repo_dir = prepare_repo(entry, args.workdir)
        if not repo_dir:
            continue
        count = count_commits(repo_dir, since, until)
        name = os.path.basename(repo_dir)
        print(f"{name:30s}: {count:5d} commits")
        total += count

    print(f"\n{'TOTAL':30s}: {total:5d} commits\n")

if __name__ == "__main__":
    main()
