This is the figure image repostitory for "Keep It Moving? Conserving Kinetic Art," edited by Rachel Rivenc and Reinhard Bek, and first publishing in March 2018 by Getty Publications. This repository is included as a submodule of the main publication repository, https://github.com/gettypubs/keepitmoving. It **must remain private** as the images here are under copyright and not licensed for use outside the publication itself.

When cloning the *Keep It Moving* repo for further development, you’ll need to do so recursively in order to clone both the main repo and this figure images submodule.

```
git clone --recursive https://github.com/gettypubs/keepitmoving.git
```

When changes are made in this repository, the submodule must be updated in the main repository to point to those latest changes, rather than to an older commit.

```
git submodule update
```

Read a [git submodules basic explanation](https://gist.github.com/gitaarik/8735255), and more about [working with submodules](https://github.com/blog/2104-working-with-submodules).
