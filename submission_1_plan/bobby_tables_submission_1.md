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
in the most efficient way they can come up with. The following members will be 
working on this half of the project:

+ Andrew
+ Trey

# Extension
This half of the team will be working on the extension itself, including a 
simple user interface and implementing the filter list to block ads. The following 
members will be working on this half of the project: 

+ Brandon
+ Chase

# Collaboration
As a team, we will use a shared, private GitHub repository with several branches 
to share and maintain our codebase. We plan on having weekly or biweekly meetings 
to check in on our project's progress and see if either team needs extra assistance.