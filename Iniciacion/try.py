phrase = "hola123"
palabras = 0
numeros = 0
for i in phrase:
    if isinstance(i, str):
        palabras += 1
    else:
        numeros += 1

print(type(i))
print(palabras, numeros)

