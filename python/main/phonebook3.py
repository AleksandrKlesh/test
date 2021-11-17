import csv

from cs50 import get_string

with open("phonebook3.csv", "a") as file:

    name = get_string("Name: ")
    number = get_string("Number: ")

    writer = csv.writer(file)

    writer.writerow([name, number])


# It works, but not in the rigth way