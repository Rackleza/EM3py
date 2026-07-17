# ===== 1. PRINT =====
print("Hello, world!")


# ===== 2. INPUT =====
name = input("What is your name? ")
print("Hi, " + name)


# ===== 3. IF / ELSE =====
age = 18

if age >= 18:
    print("You are an adult")
else:
    print("You are a minor")


# ===== 4. LOOP =====
for i in range(5):
    print("Loop number:", i)


# ===== 5. LIST =====
fruits = ["apple", "banana"]
fruits.append("cherry")

print(fruits[0])
print(fruits)


# ===== 6. FUNCTION (def) =====
def greet(person):
    return "Hi " + person

print(greet("Sam"))

# python main.py