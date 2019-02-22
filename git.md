# Git/GitHub
***
### Contents
*  [**Git**](#git)
	* [**Basics**](#basics)
		* [What is it?](#what-is-it)
		* [The process of Git](#the-process-of-git)
	* [**Creating / Staging / Commiting**](#creatingstagingcommiting)
		* [Creating a repository (repo)](#creating-a-repository-repo)
		* [Staging files](#staging-files)
		* [Making commits](#making-commits)
	* [**Undoing things**](#undoing-things)
		* [Checkout commit](#checkout-commit)
		* [Revert commit](#revert-commit)
		* [Reset commit](#reset-commit)
	* [**Branches**](#branches)
		* [What are branches?](#what-are-branches)
		* [How do I view all branches?](#how-do-i-view-all-branches)
		* [How do I make a new branch?](#how-do-i-make-a-new-branch)
		* [How do I simultaneously create and checkout a new branch?](#how-do-i-simultaneously-create-and-checkout-a-new-branch)
		* [How do I delete a branch?](#how-do-i-delete-a-branch)
		* [When I am happy with changes made on a branch, how do I incorporate them into the master branch?](#when-i-am-happy-with-changes-made-on-a-branch-how-do-i-incorporate-them-into-the-master-branch)
		* [What happens if I'm working on a team and another developer has made changes to the same file I have?](#what-happens-if-im-working-on-a-team-and-another-developer-has-made-changes-to-the-same-file-i-have)
*  [**GitHub**](#github)
	* [**Basics**](#basics-1)
		* [What is it?](#what-is-it-1)
	* [**Uploading (AKA pushing)**](#uploading-aka-pushing)
		* [How do I upload (AKA push) a local repo to GitHub?](#how-do-i-upload-aka-push-a-local-repo-to-github)
		* [Do I have type the long URL every time I want to push the local repo to GitHub?](#do-i-have-to-type-the-long-url-every-time-i-want-to-push-the-local-repo-to-github)
		* [Can I create a repo in GitHub first without a local repo?](#can-i-create-a-repo-in-github-first-without-a-local-repo)
	* [**Collaborating in a team**](#collaborating-in-a-team)
		* [If I'm working in a team, how can I make sure I'm working on the project locally with their up-to-date changes?](#if-im-working-in-a-team-how-can-i-make-sure-im-working-on-the-project-locally-with-theiruptodate-changes)
		* [Once I'm happy with changes, how do I submit it for review?](#once-im-happy-with-changes-how-do-i-submit-it-for-review)
		* […and if I'm the person reviewing another developer's changes?](and-if-im-the-person-reviewing-another-developers-changes)
	* [**Collaborating on an open-source project**](#collaborating-on-an-opensource-project)
		* [How can I work on an open-source repo?](#how-can-i-work-on-an-opensource-repo)
		* [How do I submit it to the open-source project admin for review?](#how-do-i-submit-it-to-the-opensource-project-admin-for-review)

## Git
***
### Basics
***
#### What is it?
Git is a Version Control System (or VCS).  In a nutshell, this means that you can keep track of changes to your code and revert back to them at any time, if needed.

[Back to top](#gitgithub)

***
#### The process of Git
There are three stages to the process.  They are...

>Modified > Staged > Commited

Once Git is initialised on the project, it will recognise which files have been modified.  However, to save them (or commit them) in your repo you need to add them to the staging area first.  This guide will explain the process.

[Back to top](#gitgithub)

***
### Creating / Staging / Commiting
***
#### Creating a repository (repo)
Navigate to the project directory and type...

	git init

[Back to top](#gitgithub)

***
#### Staging files
To see which files are in the staging area *(NOTE: Modified files not in the staging area will be shown in green)*
, type... 

	git status

To add a file to the staging area, type...
	
	git add whateverFileName.html

To remove a file from the staging area, type...

	git rm --cached whateverFileName.html

To add all filess within a directory to the staging area, type...

	git add .

[Back to top](#gitgithub)

***
#### Making commits
To make a commit, type...
	
	git commit -m "A good description of changes"

To review commit history...

	git log

To review commit history in a condensed form...

	git log --oneline

[Back to top](#gitgithub)

***
### Undoing things
***
#### Checkout commit
A checkout commit can be thought of as a 'read-only' option.  It allows you to view your code at a previous commit, but won't save any changes to your repo *(A dummy commit ID is used in the example)*...

	git checkout b67322d

This will detach you from the master branch.  To go back to the most recent commit on the master branch...

	git checkout master

[Back to top](#gitgithub)

***
#### Revert commit
Think of this as a 'non-destructive undo' option. When executed, it will remove anything at a specified commit but store this as a new commit...

	git revert b67322d
You will be presented with a screen asking for comments to add to a new commit.  There is no need to do this.  Instead, get out of the option menu by pressing `shift` and `:`, then type `wq` and hit `enter`

[Back to top](#gitgithub)

***
#### Reset commit
This option can be thought of as a 'destructive undo'.  Only use it if you are sure you will not need to have access to recent commits again.

	git reset b67322d

This will keep the last commits in your editor, so if you did not mean to do a reset you can salvage it by resaving them.  If you are absolutely sure, you won't need them again you can use the `--hard` command.

	git reset b67322d --hard

[Back to top](#gitgithub)

***
### Branches
***
#### What are branches?
Branches can be used while working on new functionality.  This way, it won't mess with the code on the master branch.  It's also useful if you have more than one developer working on different features simultaneously. Once you are happy with the functionality on the additional branch, you can then merge it back into the master branch with a merge commit.

[Back to top](#gitgithub)

***
#### How do I view all branches?
To view all branches in your repo...

	git branch -a

[Back to top](#gitgithub)

***
#### How do I make a new branch?
	
	git branch nameOfBranch

To start making changes on this branch, you need to switch to it.

	git checkout nameOfBranch

[Back to top](#gitgithub)

***
#### How do I simultaneously create and checkout a new branch?
	
	git checkout -b nameOfBranch

[Back to top](#gitgithub)

***
#### How do I delete a branch?
To delete an **unmerged** branch...
	
	git branch -D nameOfBranch

To delete a **merged** branch...
	
	git branch -d nameOfBranch

[Back to top](#gitgithub)

***
#### When I am happy with changes made on a branch, how do I incorporate them into the master branch?
When you are happy with changes on a branch and you want to incorporate them into the master branch, you can perform a **merge**.  Ensure you are 'checking out' the master branch before doing this.

	git merge nameOfBranch

[Back to top](#gitgithub)

***
#### What happens if I'm working on a team and another developer has made changes to the same file I have?
This is known as a **conflict**.  The same file has been changed on different branches *(e.g. both developers have made changes to the styles.css file)*.  This will cause an error message to occur with a hint on where the conflict is.  Once you have communicated with the other developer and agreed on what changes to keep to the file, add it (or all) to the staging area...

	git add .

and then commit it but this time without the -m flag...

	git commit

You will be presented with an option screen advising you are about to commit a merge.  Exit out of that by typing `shift` and `:`, then type `wq` and hit `enter`

[Back to top](#gitgithub)

***
## GitHub
***
### Basics
***
#### What is it?
GitHub is an online service for hosting repositories.  It allows easy collaboration with other developers on projects and a cloud-based storeroom for your code and repos.

[Back to top](#gitgithub)

***
### Uploading (AKA pushing)
***
#### How do I upload (AKA push) a local repo to GitHub?
Create a repo at github.com and then check your local repo has nothing in the staging area to commit *(There should be a message saying 'nothing to commit, working tree clean')* and then you're good to push.  *(NOTE: In this example the demo name of the GitHub repo is 'git-repo-name.git')*

	git push https://github.com/dardinodavid/git-repo-name.git master
***
#### Do I have to type the long URL every time I want to push the local repo to GitHub?
No!  You can set up an alias (AKA remote) to avoid this scenario.

	git remote add origin https://github.com/dardinodavid/git-repo-name.git

Now, you can push to the GitHub repo using the alias instead.

	git push origin master

[Back to top](#gitgithub)

***
#### Can I create a repo in GitHub first without a local repo?
Absolutely!  In fact, it's the better way of working.  First of all, create a repo on GitHub.com ensuring you select the option to create a README file.  Then navigate to where you want to work on the project locally in your terminal.  You then need to **clone** the GitHub repo to create a new directory containing all the files in the repo.

	git clone https://github.com/dardinodavid/git-repo-name.git

The additional bonus of working this way, is that after you've made changes locally that you want to push to the GitHub repo, you don't need to set up an alias (AKA remote) manually.  GitHub does this automatically.  You can check this in the terminal.

	git remote -v

You can use the 'origin' alias right out of the box!

	git push origin master

[Back to top](#gitgithub)

***
### Collaborating in a team
***
#### If I'm working in a team, how can I make sure I'm working on the project locally with their up-to-date changes?
Good question!  You can update your local repo with the most current changes by making a **pull** request.  It's good practice to do this before starting a chunk of work on the project.

	git pull origin master

[Back to top](#gitgithub)

***
#### Once I'm happy with changes, how do I submit it for review?
You can push your branch containing the changes *(Remember it is **BAD** practice to work on changes in the master branch)* to the GitHub repo in the usual manner.

	git push origin nameOfBranch

Then, in the GitHub repository, click the **Compare & pull request** button next to the branch in the menu with the label **Your recently pushed branches**.  Write a comment to explain how you've improved the project.  Then hit the **Create pull request** button.  On the right menu, you can assign specific reviewers.

[Back to top](#gitgithub)

***
####...and if I'm the person reviewing another developer's changes?
You can write and submit comments on the request.  You can also view the changes to the code by clicking the **Files changed** button in the top menu; code highlighted in green is content added by the developer, red is code removed by the developer.  You can add comments at a certain line by hovering over the line number and clicking the **+** button.  If you're happy with their changes, you can merge the request by clicking the **Merge pull request** button and then you can also click the **Delete Branch** as it is already merged.  If you need some changes made before performing the merge, leave a comment for the developer.

***
### Collaborating on an open-source project
***
#### How can I work on an open-source repo?
The owner of the open-source repo won't want to allow anyone to push to their master branch or make any other significant changes, therefore a different process is needed.  Firstly, you need to **fork** it to your own GitHub account.  On the repo page, click the **Fork** button in the top right.  When this has finished, a copy of the project will be in your GitHub account.  You then need to **clone** it to your local machine to start working on it.  Then make changes on a separate branch and push it back to the forked project on your account in the usual fashion.  There will usually be a **contributing.md** file in an open-source that provides guidelines on best practices/rules for submissions.

[Back to top](#gitgithub)

***
#### How do I submit it to the open-source project admin for review?
Simple!  Navigate to the forked project on your GitHub account and click the **New pull request** button.  Much like when you work on a team, add comments to the request to say how you've improved the project and submit it for review by clicking **Create pull request**.  The admin can then review your request and provide feedback.

[Back to top](#gitgithub)