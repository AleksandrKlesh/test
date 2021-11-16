people = {
    "Brian": "+1-617-495-1000",
    "David": "+1-949-468-2750"
}

name = str(input("Name: "))
if name in people:
    number = people[name]
    print(f"Number: {number}")


# D-I-C-T, represent a collection of key-value pairs similar in spirit to a dictionary. Associative arrays. It uses hash tables. NOT LINEAR SEARCH
