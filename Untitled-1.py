print("Learning Python is fun!")

 
def greet(name):
    """Function to greet a person."""
    return f"Hello, {name}!"

print(greet("Alice"))

def main ():
    """Main function to execute the script."""
    print("This is the main function.")
    greeting = greet("Bob")
    print(greeting)

if __name__ == "__main__":
    main()  