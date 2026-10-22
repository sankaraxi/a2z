# A2Z Associates – Tax & Compliance Advisory Website

Official website for **A2Z Associates**, Gandhipuram, Coimbatore.

## GitHub Pages Deployment Instructions

This repository is configured with automated GitHub Actions deployment.

### Step 1: Enable GitHub Pages in your GitHub Repository
1. Go to your repository on GitHub.
2. Click **Settings** (tab at the top right of the repo).
3. In the left sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment** &rarr; **Source**, select **"GitHub Actions"** (do NOT select "Deploy from a branch").

### Step 2: Push your code or Run the Action
- Any push to `main` or `master` will automatically trigger `.github/workflows/deploy.yml`.
- You can also manually trigger it by visiting **Actions** &rarr; **Deploy A2Z Associates to GitHub Pages** &rarr; **Run workflow**.

### Custom Domain (Optional: a2zassociates.in)
If you wish to attach `a2zassociates.in` directly:
1. In repository **Settings** &rarr; **Pages**, enter `a2zassociates.in` in the **Custom domain** field.
2. In your DNS provider (e.g. GoDaddy, Cloudflare, Namecheap), point an `A` record or `CNAME` as indicated by GitHub.
3. Check the **Enforce HTTPS** box once DNS propagates.
