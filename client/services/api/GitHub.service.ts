import { Octokit } from '@octokit/rest';

class GitHubService {
  private octokit: Octokit = null;

  private assetCorrectInit() {
    if (this.octokit === null) {
      throw new Error("Error! Octokit service has't been properly initialized");
    }
  }

  // eslint-disable-next-line class-methods-use-this
  public oauth() {
    if (typeof window !== 'undefined') {
      window.location.href = `https://github.com/login/oauth/authorize?scope=user:email%20public_repo&client_id=${process.env.GITHUB_CLIENT_ID}`;
    } else {
      console.error('GitHubService.auth: this funciton should only be run from client.');
    }
  }

  public async init(auth: string) {
    const { Octokit } = await import('@octokit/rest');

    this.octokit = new Octokit({
      auth,
    });
  }

  public async hasForkedRepo(username, repo, owner) {
    this.assetCorrectInit();

    try {
      const forkedRepo = await this.octokit.rest
        .repos
        .get({
          owner: username,
          repo,
        });

      return forkedRepo.data.source.owner.login === owner;
    } catch (err) {
      console.error(
        `GitHubService.hasForkedRepo: for username=${username}, repo=${repo} and owner=${owner}`,
        err,
      );
      return false;
    }
  }

  public async hasBranch(username, repo, branchName) {
    this.assetCorrectInit();

    try {
      const branches = await this.octokit.rest
        .repos
        .listBranches({
          owner: username,
          repo,
        });
      return branches
        .data
        .find((branch) => branch.name === branchName) !== undefined;
    } catch (err) {
      console.error(
        `GitHubService.hasBranch: for username=${username}, repo=${repo} and branchName=${branchName}`,
        err,
      );
      return false;
    }
  }

  public async getHeadCommit(username, repo, branchName = 'master') {
    this.assetCorrectInit();

    try {
      const commits = await this.octokit.rest
        .repos
        .listCommits({
          owner: username,
          repo,
          // SHA or Branch to list commits from 👇
          sha: branchName,
        });

      return commits.data[0];
    } catch (err) {
      console.error(
        `GitHubService.getHeadCommit: for username=${username}, repo=${repo} and branchName=${branchName}`,
        err,
      );
      return null;
    }
  }

  public async getCommitsAfter(username, repo, referenceSha, branchName = 'master') {
    this.assetCorrectInit();

    try {
      const commits = await this.octokit.rest
        .repos
        .listCommits({
          owner: username,
          repo,
          // TODO: what if there's more?
          per_page: 100,
          // SHA or Branch to list commits from 👇
          sha: branchName,
        });

      const indexOf = commits.data.findIndex((commit) => {
        return commit.sha === referenceSha;
      });
      return commits.data.splice(0, indexOf).reverse();
    } catch (err) {
      console.error(
        `GitHubService.getCommits: for username=${username}, repo=${repo} and branchName=${branchName}`,
        err,
      );
      return [];
    }
  }

  public async getCommitFiles(username, repo, sha) {
    this.assetCorrectInit();

    try {
      const commit = await this.octokit
        .rest
        .repos
        .getCommit({
          owner: username,
          repo,
          ref: sha,
        });
      return commit.data.files ?? [];
    } catch (err) {
      // TODO: maybe throw and show error in UI!
      console.error(
        `GitHubService.getCommitFiles: for username=${username} and repo=${repo}`,
        err,
      );
      return [];
    }
  }

  public async getCollaboratorPermissionLevel(owner, repo, username): Promise<'admin' | 'write' | 'read' | 'none'> {
    this.assetCorrectInit();

    try {
      const permissions = await this.octokit
        .rest
        .repos
        .getCollaboratorPermissionLevel({
          owner,
          repo,
          username,
        });

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // TODO FIX
      return permissions.data.permission;
    } catch (err) {
      console.error(
        `GitHubService.getCollaboratorPermissionLevel: for owner=${owner},repo=${repo} and username=${username}`,
        err,
      );
      return 'none';
    }
  }

  public async getPulls(owner, repo) {
    this.assetCorrectInit();

    try {
      const pulls = await this.octokit
        .rest
        .pulls
        .list({
          owner,
          repo,
        });
      return pulls.data;
    } catch (err) {
      console.error(
        `GitHubService.getPulls: for owner=${owner} and repo=${repo}`,
        err,
      );
      return [];
    }
  }

  public async getPull(owner, repo, pullNumber) {
    this.assetCorrectInit();

    try {
      const pull = await this.octokit
        .rest
        .pulls
        .get({
          owner,
          repo,
          pull_number: pullNumber,
        });
      return pull.data;
    } catch (err) {
      console.error(
        `GitHubService.getPull: for owner=${owner},repo=${repo} and pull_number=${pullNumber}`,
        err,
      );
      return null;
    }
  }
}

export default new GitHubService();
