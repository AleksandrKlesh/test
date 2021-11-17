import csv

file = open("phonebook.csv", "a")

name = input("Name: ")
number = input("Number: ")

writer = csv.writer(file)

writer.writerow([name, number])

file.close()

# It works, but not in the rigth way