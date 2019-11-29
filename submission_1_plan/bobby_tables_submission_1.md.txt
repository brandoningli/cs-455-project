---
title: Project Submission 1
author: Team `'; DROP TABLE team_names;`
date: \today
# thanks: 
# toc: true
# toc-depth: 4
indent: true
classoption:
- 11pt
# - landscape
geometry:
- margin=1.0in
papersize: letter
header-includes:
- |
 \usepackage{titling}
    \usepackage{fancyhdr}
    \fancypagestyle{document}
        {
            \fancyhead[L]{\theauthor}
            \fancyhead[C]{\thetitle}
            \fancyhead[R]{\thepage}
            \fancyfoot[C]{}
        }
- \fancypagestyle{plain}{\renewcommand{\headrulewidth}{0pt}\fancyhf{}}
- \pagestyle{document}
- \usepackage{indentfirst}
# - \usepackage[margins=raggedright]{floatrow}
# - \usepackage{mathrsfs}
# colorlinks: urlcolor
output: pdf_document
---

We will divide the project into two parts.

# Filter List
This half of the team will be responsible for finding and combining filter lists 
in the most efficient way they can come up with. They have not currently decided on what 
filter lists to use, but they are confident that finding the filter lists and deciding on 
which ones to use will be a trivial task. The following members will be working on this half of the project:

+ Andrew
+ Trey

# Extension
This half of the team will be working on the Firefox extension itself, including a 
simple user interface and implementing the filter list to block ads. Firefox was chosen 
because of its Free and Open Source nature, as well as the fact that it more closely follows 
the proposed W3 Standards for browser extensions, while Chrome diverges from them often. 
JavaScript will be the language of choice, with HTML/CSS for the simple front-end. 
The following members will be working on this half of the project: 

+ Brandon
+ Chase

# Collaboration
As a team, we will use a shared, private GitHub repository with several branches 
to share and maintain our codebase. We plan on having weekly or biweekly meetings 
to check in on our project's progress and see if either team needs extra assistance. 
We have also set up a group chat for instant communication as issues arise.