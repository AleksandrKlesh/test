s = input("Do you agree? ")

if s.lower() in ["y", "yes", "yeah"]:
    print("Agreed.")
elif s.lower() in ["n", "no", "nope"]:
    print("Not agreed.")