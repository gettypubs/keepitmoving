This is the repository for Keep It Moving? Conserving Kinetic Art.

## Installation guide

1. If working on an Apple computer, you must have the command line developer tool installed to set up your environment in order to use Quire. To install this, please connect to the Getty network, open the command line application, and type `xcode-select --install`.

2. Install homebrew by typing `install /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` into the command line.

3. Install node by typing `brew install node` into the command line.

4. Install hugo by typing `brew install hugo` into the command line.

5. Once you have installed the command line developer tool, homebrew, node, and hugo, you will need to download quire-cli onto your computer by visiting https://github.com/gettypubs/quire-cli and hitting the green "Clone or download" button on the right side of the page. [Note that you may need to request access to this folder.]

6. Using the command line, switch to the local quire-cli repository you just downloaded on your computer and type `npm install -g` in order to install globally.

7. You can now clone the project folder that you wish to work on. Go to the gettypubs github site (https://github.com/gettypubs), click on the appropriate project folder, and hit the green "Clone or download" button on the right hand side of the page. [Note that you may need to request access to this folder.]

8. Once you have a project repository set up locally on your computer, you will need to download the theme and place it in that repository. [Note that you may need to ask Eric or Greg to give you the most recent theme folder to move into your local repository.]

9. When you have placed the theme in your repository, open up the folder in finder and delete the "node_modules" folder.

10. Using the command line, switch to the folder and type `npm install` to install the latest node modules.

11. You should now be able to run `quire preview` in order to see the site locally at http://localhost:1313/.

## Basic commands for working with Quire

- `quire preview` allows you to preview the site locally on your computer at http://localhost:1313/.

- If you are having trouble previewing your site, you can use `hugo server` instead to see where problems may lie that are obstructing your site from running locally.

- Pressing `control` and `c` will stop the local generation of your site in case you need to perform other operations on the command line.

- If you would like to create a new site from scratch, you can use `quire new my-project-name`.

- When your site is ready to build, use `quire build`. [This will build the site to /public.]

- In order to deploy to Github Pages, use `bin/deploy.sh`.

