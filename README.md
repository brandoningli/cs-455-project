# cs-455-project
A class project for Truman's CS 455 (Computer Security Fundamentals) class, Fall 2019.

This is a Firefox extension that attempts to block advertisements using a filter list.

# Installation Instructions
1. [Download the latest release.](https://github.com/brandoningli/cs-455-project/releases)
2. Open firefox, click on the Hamburger menu, and select Add-ons.
3. If not on the Extensions page, click on Extensions in the left menu.
4. Click the gear icon, select Install Add-on From File, and select the .xpi file you downloaded earlier.
5. Grant permissions and Add. This extension needs the view data on all sites in order to trap the network requests from advertisements. We do not log any traffic.

# Project Description

In this project, your team would be working to counter [malvertising](https://en.wikipedia.org/wiki/Malvertising ). Malvertising refers to injecting malware using online advertisements.

There are multiple ways to counter malvertisements, but in this project you'd be working on blocking any and all ads from a web page. In order to block any ad you'd need to develop an ad-blocker that'd work as a browser plug-in (add-on or extension). There are quite a few filter lists for ad-signatures that are available for free use like [All-in-One-Customized-Adblock-List]( https://github.com/hl2guide/All-in-One-Customized-Adblock-List/blob/master/DOMAINS%20LIST%20(Alpha)/ublock_domain_blocklist.txt ), [fanboy]( https://www.fanboy.co.nz/r/fanboy-complete.txt ), [adtidy]( https://filters.adtidy.org/extension/chromium/filters/2.txt ) among others. 

There are lots of issues with these ad filter lists like as mentioned in these papers: (READING THE FOLLOWING PAPERS IS HIGHLY RECOMMENDED FOR A SUCCESSFUL PROTOTYPE DEVELOPMENT)

+ https://www.usenix.org/conference/usenixsecurity16/technical-sessions/presentation/nakibly  
+ https://arxiv.org/pdf/1805.09155.pdf

The issues could be either solved by taking a smarter machine learning approach or taking a simpler yet effective merge approach. In this project you'd be working on merging different filter lists (4 or more) to come up with a master ad signature filter list. You will then use this master list to block any ad on a web page.

## Submission 1

Read the papers provided to you in this announcement, research the issues with advertising and malwares and come up with an effective plan to block any kind of malware using filter lists (master ad signature filter list). Submit a preliminary report that presents your stepwise plan, methodology and each team member's role in this project. This submission doesn't need for you to submit any source code, but it advised that you get hands on with how to develop browser extensions on any browser of your choice. (The next phase, submission 2, of this project would simply follow the aforementioned plan to develop a prototype for blocking malware, thus make sure to spend enough efforts in developing the correct methodology). 

Points: 100

Deadline: End of day, September 30, 2019.

## Final Submission

In final phase of the project your team would work towards developing a prototype for blocking adwares (malicious/non-malicious) based on the information and methodology you have provided in the Phase-1. Your prototype should be a working tool that would block the ads based on the approach you have decided is the best. This submission would have two parts: Report + Presentation.

Report: Submit a project report (one per team) explaining your tool along with the documentation for the source code and its step-by-step deployment should I try to install it on my computer. Explain each team member's contribution as well. This project does have a learning curve, so feel free to include your learning experience, lessons learned, problems faced and adopted solutions. Points: 200

Presentation: 15 mins for each team, explain your tool in brief, lessons learned, problems faced and adopted solutions. Points: 100

Deadline: End of day, December 1, 2019.

Presentation schedule would be posted soon on the blackboard.
