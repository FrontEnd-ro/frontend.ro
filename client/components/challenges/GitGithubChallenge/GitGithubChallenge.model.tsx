import React, { ReactElement } from 'react';
import List from '~/components/List';
/* eslint-disable import/prefer-default-export */
import GitHubService from '~/services/api/GitHub.service';
import UserService from '~/services/api/User.service';

interface VerifyResp {
  isDone: boolean;
  errMessage?: string;
  // Some extra meta in case we want to tie one task with another

  // TODO: change meta to contain
  // > info from all previous task
  // > it should be a MAP
  meta?: {
    commit?: any
    pr?: any
  }
}

export type Task = {
  id: string;
  title: ReactElement;
  verify: ({
    username, repo, owner, meta,
  }: { username?: string, repo?: string, owner?: string, meta?: VerifyResp['meta'] })
    => Promise<VerifyResp>;
}

const tasks: Task[] = [
  {
    id: 'create-github-account',
    title: (
      <>
        Crează-ți și conectează contul de
        {' '}
        <a target="_blank" href="https://github.com" rel="noreferrer">GitHub</a>
      </>
    ),
    verify: githubAccountVerify,
  },
  {
    id: 'fork-repo',
    title: (
      <>
        Fork-uiește
        {' '}
        <a target="_blank" href="https://github.com/FrontEnd-ro/git-github-practice-exercises" rel="noreferrer">
          repo-ul cu exerciții
        </a>
      </>
    ),
    verify: forkRepoVerify,
  },
  {
    id: 'created-cli-branch',
    title: (
      <>
        Creează un nou branch din
        {' '}
        <strong> master </strong>
        {' '}
        numit
        {' '}
        <strong>cli</strong>
      </>
    ),
    verify: ({ username, repo }) => createBranchFromHeadVerify({ username, repo }, 'cli', 'master'),
  }, {
    id: 'name-in-prep.html',
    title: (
      <>
        Adaugă o nouă celulă cu numele tău în fișierul
        <strong> prep.html </strong>
        .
        <br />
        <small>
          Pst: hai să folosim următoarea convenție
          pentru numele commit-urilor:
          <strong> [Task-N] descriere</strong>
        </small>
      </>
    ),
    verify: ({ username, repo, meta }) => commitCodeVerify({
      username,
      repo,
      filenameRegexpList: [new RegExp('prep[.]html')],
      commitRegExp: new RegExp('\\[Task-[0-9]+\\] (.)+'),
      startSha: meta?.commit?.sha,
      index: 0,
      branchName: 'cli',
    }),
  }, {
    id: 'fill-in-info-in-index.html',
    title: (
      <>
        Adaugă "componenta"
        {' '}
        <em>Fill-in info</em>
        {' '}
        (pe care o găsești în
        {' '}
        <a target="_blank" href="https://github.com/FrontEnd-ro/git-github-practice-exercises#git-github-practice-exercises" rel="noreferrer">
          README.md
        </a>
        )  în fișierul
        {' '}
        <strong>index.html</strong>
        {' '}
        și adaugă-ți acolo numele.
        <br />
      </>
    ),
    verify: ({ username, repo, meta }) => commitCodeVerify({
      username,
      repo,
      filenameRegexpList: [new RegExp('index[.]html')],
      commitRegExp: new RegExp('\\[Task-[0-9]+\\] (.)+'),
      startSha: meta?.commit?.sha,
      index: 0,
      branchName: 'cli',
    }),
  }, {
    id: 'challenges-branch-from-cli',
    title: (
      <>
        Creează un nou branch numit
        {' '}
        <strong> challenges</strong>
        {' '}
        din
        {' '}
        <strong> cli </strong>
      </>
    ),
    verify: ({ username, repo }) => createBranchFromHeadVerify({ username, repo }, 'challenges', 'cli'),
  }, {
    id: 'challenges-photo-in-exercises.html',
    title: (
      <>
        Adaugă o poza cu tine în grid-ul din
        {' '}
        <strong>exercitii.html</strong>
      </>
    ),
    verify: ({ username, repo, meta }) => commitCodeVerify({
      username,
      repo,
      filenameRegexpList: [new RegExp('exercitii[.]html')],
      commitRegExp: new RegExp('\\[Task-[0-9]+\\] (.)+'),
      startSha: meta.commit.sha,
      index: 0,
      branchName: 'challenges',
    }),
  }, {
    id: 'challenges-info-about-you-in-exercises.html',
    title: (
      <>
        Adaugă o nouă celulă în
        {' '}
        <strong>exerciții.html</strong>
        {' '}
        cu câteva informații despre tine. Pot fi ceva hobby-uri,
        job-ul pe care-l ai sau de ce vrei să înveți Git.
      </>
    ),
    verify: ({ username, repo, meta }) => commitCodeVerify({
      username,
      repo,
      filenameRegexpList: [new RegExp('exercitii[.]html')],
      commitRegExp: new RegExp('\\[Task-[0-9]+\\] (.)+'),
      startSha: meta.commit.sha,
      index: 0,
      branchName: 'challenges',
    }),
  }, {
    id: 'challenges-info-command-list-in-exercises.html',
    title: (
      <>
        Folosește "componenta"
        {' '}
        <em>Commands list</em>
        {' '}
        (pe care o găsești în
        {' '}
        <a target="_blank" href="https://github.com/FrontEnd-ro/git-github-practice-exercises#git-github-practice-exercises" rel="noreferrer">
          README.md
        </a>
        )  în fișierul
        {' '}
        <strong>exercitii.html</strong>
        {' '}
        și adaugă comenzile folosite până acum.
        <br />
      </>
    ),
    verify: ({ username, repo, meta }) => commitCodeVerify({
      username,
      repo,
      filenameRegexpList: [new RegExp('exercitii[.]html')],
      commitRegExp: new RegExp('\\[Task-[0-9]+\\] (.)+'),
      startSha: meta.commit.sha,
      index: 0,
      branchName: 'challenges',
    }),
  }, {
    id: 'challenges-nr-of-commits-in-exercises.html',
    title: (
      <>
        Adaugă o nouă celulă în
        {' '}
        <strong>exerciții.html</strong>
        {' '}
        cu numărul de commit-uri de până acum
      </>
    ),
    verify: ({ username, repo, meta }) => commitCodeVerify({
      username,
      repo,
      filenameRegexpList: [new RegExp('exercitii[.]html')],
      commitRegExp: new RegExp('\\[Task-[0-9]+\\] (.)+'),
      startSha: meta.commit.sha,
      index: 0,
      branchName: 'challenges',
    }),
  }, {
    id: 'challenges-v-2-from-challenges',
    title: (
      <>
        Creează un nou branch numit
        {' '}
        <strong> challenges-v2</strong>
        {' '}
        din
        {' '}
        <strong> challenges </strong>
      </>
    ),
    verify: ({ username, repo }) => createBranchFromHeadVerify({ username, repo }, 'challenges-v2', 'challenges'),
  }, {
    id: 'revert commands list',
    title: (
      <>
        Vrem să vedem dacă în loc de lista de comenzi folosite
        până acum ar fi trebuit să adaugăm o descriere despre Git?!
        <br />
        Așa că, hai să facem
        {' '}
        <strong>revert</strong>
        {' '}
        la
        commit-ul în care am folosit "Commands List".
      </>
    ),
    verify: ({ username, repo, meta }) => commitCodeVerify({
      username,
      repo,
      filenameRegexpList: [new RegExp('exercitii[.]html')],
      commitRegExp: new RegExp('Revert "\\[Task-[0-9]+\\] .+"'),
      startSha: meta.commit.sha,
      index: 0,
      branchName: 'challenges-v2',
    }),
  }, {
    id: 'invite-as-contributor',
    title: (
      <>
        Într-un proiect de obicei vei lucra în echipă, așă
        că invită pe unul dintre noi ca și colaborator la repo:
        <List variant="bullets">
          <li>
            <a href="https://github.com/iampava" target="_blank" rel="noreferrer">iampava</a>
          </li>
          <li>
            <a href="https://github.com/catalinpopusoi" target="_blank" rel="noreferrer">catalinpopusoi</a>
          </li>
          <li>
            <a href="https://github.com/andreeatoma" target="_blank" rel="noreferrer">andreeatoma</a>
          </li>
        </List>
      </>
    ),
    verify: ({ username, repo }) => inviteAsCollaboratorVerify({ username, repo }, ['iampava', 'catalinpopusoi', 'andreeatoma', 'silidragos']),
  }, {
    id: 'open-pr',
    title: (
      <>
        Creează un nou Pull Request din branch-ul
        {' '}
        <strong>challanges</strong>
        {' '}
        către
        {' '}
        <strong>cli</strong>
        {' '}
        și adaugă un trainer ca
        și reviewer
      </>
    ),
    // TODO: make sure the tips of the branches are correct
    // meaning we have PRed with a correct from-to
    verify: ({ username, repo }) => createPRVerify({ username, repo }, 'challenges', 'cli', ['iampava', 'catalinpopusoi', 'andreeatoma', 'silidragos']),
  }, {
    id: 'merge-pr-to-challenges',
    title: (
      <>
        Merge-uiește PR-ul deschis la pasul anterior
      </>
    ),
    verify: ({ username, repo, meta }) => mergePRVerify({ username, repo, meta }),
  }];

/** ****************************************************************************** */
/** ****************************************************************************** */
/** ****************************************************************** 👇 VERIFY FUNCTIONS BELOW 👇 */
/** ****************************************************************************** */
/** ****************************************************************************** */

async function githubAccountVerify() {
  try {
    await UserService.getGithubAccount();
    return {
      isDone: true,
    };
  } catch (err) {
    // This is a special case when we need to do the check from here!
    GitHubService.oauth();

    return new Promise<VerifyResp>((resolve) => {
      // Wait for window to refresh

      setTimeout(() => {
        resolve({
          isDone: false,
          errMessage: 'Nu uita să te conectezi la GitHub',
        });
      }, 3000);
    });
    // User hasn't got a GitHub account connected
    // return {
    //   isDone: false,
    //   errMessage: 'Nu uita să te conectezi la GitHub',
    // };
  }
}

async function forkRepoVerify({ username, repo, owner }) {
  const isDone = await GitHubService.hasForkedRepo(username, repo, owner);
  return {
    isDone,
    errMessage: isDone
      ? null
      : 'Și noi ne dorim să treci mai departe dar dacă nu-l fork-uiești nu prea se poate...',
  };
}

async function createBranchFromHeadVerify({ username, repo }, targetBranch, fromBranch) {
  const hasBranch = await GitHubService.hasBranch(username, repo, targetBranch);
  if (!hasBranch) {
    return {
      isDone: false,
      errMessage: `Knock knock! Branch-ul pe care trebuie să-l creezi se numește "${targetBranch}"`,
    };
  }

  const toHeadCommit = await GitHubService.getHeadCommit(username, repo, targetBranch);
  const fromHeadCommit = await GitHubService.getHeadCommit(username, repo, fromBranch);

  const isDone = toHeadCommit.sha === fromHeadCommit.sha;

  return {
    isDone,
    errMessage: isDone ? null : `Branch-ul există dar nu pare a fi creat din ${fromBranch}`,
    meta: {
      commit: fromHeadCommit,
    },
  };
}

async function commitCodeVerify({
  username,
  repo,
  filenameRegexpList,
  commitRegExp,
  startSha,
  index,
  branchName,
}: {
  username: string;
  repo: string;
  filenameRegexpList: RegExp[];
  commitRegExp: RegExp;
  startSha: string;
  index: number;
  branchName: string;
}): Promise<VerifyResp> {
  const commitsAfter = await GitHubService.getCommitsAfter(username, repo, startSha, branchName);

  if (commitsAfter.length < index + 1) {
    return {
      isDone: false,
      errMessage: 'Branch-ul există, dar nu commit-ul acesta',
    };
  }

  const commit = commitsAfter[index];
  const firstCommitSha = commit.sha;
  const filesList = await GitHubService.getCommitFiles(username, repo, firstCommitSha);

  const filesMatch = filesList.length === filenameRegexpList.length && filesList.every((file) => {
    return filenameRegexpList.some((regExp) => !!regExp.exec(file.filename));
  });

  if (!filesMatch) {
    return {
      isDone: false,
      errMessage: 'Vestea bună: am găsit commit-ul. Vestea proastă: nu a modificat fișierul care trebuie',
    };
  }

  const commitNameMatches = !!commitRegExp.exec(commit.commit.message);

  if (!commitNameMatches) {
    return {
      isDone: false,
      errMessage: 'Ești aproape gata cu taskul ăsta. Trebuie doar să redenumești commit-ul conform pattern-ului de mai sus.',
    };
  }

  return {
    isDone: true,
    errMessage: null,
    meta: {
      commit,
    },
  };
}

async function inviteAsCollaboratorVerify({ username, repo }, collaborators: string[]) {
  const permissions = await Promise.all(collaborators
    .map((collaborator) => GitHubService.getCollaboratorPermissionLevel(
      username,
      repo,
      collaborator,
    )));

  if (permissions.some((permission) => permission === 'admin' || permission === 'write')) {
    return {
      isDone: true,
    };
  }

  return {
    isDone: false,
    errMessage: 'Hmm... Ești sigur că ai adăugat pe cine trebuie ca și colaborator?',
  };
}

async function createPRVerify(
  {
    username,
    repo,
  },
  fromBranch: string,
  toBranch: string,
  reviewers: string[],
) {
  const pulls = await GitHubService.getPulls(username, repo);

  const matchPull = pulls.find((pull) => {
    if (pull.head.label === `${username}:${fromBranch}` && pull.base.label === `${username}:${toBranch}`) {
      return true;
    }

    return false;
  });

  if (matchPull === undefined) {
    return {
      isDone: false,
      errMessage: 'Nu am găsit PR-ul. E o problemă la noi sau încă nu ai apucat să-l faci?',
    };
  }

  if (!matchPull.requested_reviewers.some((reviewer) => reviewers.includes(reviewer.login))) {
    return {
      isDone: false,
      errMessage: 'Nu uita să adaugi pe unul din traineri ca și review-er',
    };
  }

  /**
   * TODO: comment for now
   * Maybe you create the PR and actually merge it before clicking "done".
   * In this case it should still work 👇
   */
  // if (matchPull.state !== 'open') {
  //   return {
  //     isDone: false,
  //     errMessage: 'Se pare că acest PR e ok creat, dar fost deja merge-uit',
  //   };
  // }

  return {
    isDone: true,
    meta: {
      pr: matchPull,
    },
  };
}

async function mergePRVerify({ username, repo, meta }) {
  const pullNumber = meta?.pr?.number;
  const pull = await GitHubService.getPull(username, repo, pullNumber);

  if (!pull) {
    return {
      isDone: false,
      errMessage: `Se pare ca PR-ul cu numarul ${pullNumber} nu exista?! Weird!`,
    };
  }

  if (pull.state !== 'closed') {
    return {
      isDone: false,
      errMessage: 'Haide, merge!',
    };
  }

  return {
    isDone: true,
  };
}

export { tasks };
