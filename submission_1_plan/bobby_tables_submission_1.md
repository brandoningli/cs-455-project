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

