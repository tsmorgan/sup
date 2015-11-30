# sup
Opening SublimeText projects in a tabbable way.

## The story so far.

Sublime Text creates a `.sublime-project` file which lives at the root of the project you're working on. These are great because they allow you exclude various files/folders from appearing in (or being searched by) Sublime Text which is very useful.

What you want though is to `cd` into the directory and just open the project file, but when you try and do that you can't because Sublime Text has also saved a `.sublime-workspace` file in that directory too.

Eg. your project is called `myproject` you start typing `open myproj` and then you hit `[TAB]` to expand that to:

``open myproject.sublime-project``

That doesn't work because it expands as far as `myproject.sublime-` but it can go no further because that [bloody] `myproject.sublime-workspace` file is sat there with an almost identical filename.

So you have to type `p` and then hit `[TAB]` again. THE HORROR! 

So this script runs through your directory. Finds the `.sublime-project` file and opens it. 

## Installing

* Clone the repo somewhere. 
* run `npm install` in that folder.
* run `npm link` in that folder.
* Go to a folder with a `.sublime-project` file in it and type `sup`.