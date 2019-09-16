# cs-455-project
A class project for Truman's CS 455 (Computer Security Fundamentals) class, Fall 2019.



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
