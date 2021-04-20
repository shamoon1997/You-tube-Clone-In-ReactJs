# Problem statement.
The repo contains weather files for Murree. Write an application that generates the following reports. The user can specify more than one report at the same time.

<!--
The program should be designed as follows:
Define a data structure for holding each weather reading.
Define a class for parsing the files and populating the readings data structure with correct data types.
Define a data structure for holding the calculations results.
Define a class for computing the calculations given the readings data structure.
Define a class for creating the reports given the results data structure.
Define main for assembling the above and running the program.
-->
Pep-8 conventions should be followed in the code.

1. For a given year display the highest temperature and day, lowest temperature and day, most humid day and humidity.

```sh
python weatherman.py /path/to/files-dir -e 2002
Highest: 45C on June 23
Lowest: 01C on December 22
Humidity: 95% on August 14
```

1. For a given month display the average highest temperature, average lowest temperature, average mean humidity.

```sh
python weatherman.py /path/to/files-dir -a 2005/6
Highest Average: 39C
Lowest Average: 18C
Average Mean Humidity: 71%
```

3. For a given month draw two horizontal bar charts on the console for the highest and lowest temperature on each day. Highest in red and lowest in blue.

```sh
python weatherman.py /path/to/files-dir -c 2011/03
March 2011
01 +++++++++++++++++++++++++ 25C # symbole and temperature should be in red
01 ----------- 11C # symbole and temperature should be in blue
02 ++++++++++++++++++++++ 22C
02 -------- 08C
```

4. (Bonus Task) For a given month draw a single horizontal bar charts on the console for the highest and lowest temperature on each day. Highest in red and lowest in blue. Color should be applied to related symbols and temperature text.

```sh
python weatherman.py /path/to/files-dir -c 2011/03
March 2011
01 11C -----------+++++++++++++++++++++++++ 25C
02 08C --------++++++++++++++++++++++ 22C
```
