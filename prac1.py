# file reads
file1 = open ("test.txt", "r");

# character generators
def AlphGen ():
    main: list = [];
    for i in range (65, 90):
        main.append (chr (i)) 
    for i in range (97, 122):
        main.append (chr (i)) 
    return main;

# hardcode variables
keywords: list =["int", 'float', 'double', 'string', 'if', 'else']
identifiers: list = AlphGen () # storing generated characters
operators: list =['+', '-', '*', '/', '%', '='];
logical: list =['>', '<', '=='];
other: list =['(', ')', '{', '}', ';', ','];

# storage variables
S_keywords: list =[];
S_identifiers: list =[];
S_operators: list =[];
S_logical: list =[];
S_other: list =[];
S_numerical: list =[];

#temporary variables
chunks: list = file1.readlines()
refined_chunks: list = []
core_chunks: list = []


# preprocessing
for i in chunks:
    refined_chunks.append(i.replace("\n", ""))

# refined chunks processing
for i in refined_chunks:
    core_chunks.append(i.split(" "))

# core chunks processing
for i in core_chunks:
    for y in i:
        
        if y in keywords and y not in S_keywords:
            S_keywords.append(y)
        if y in identifiers and y not in S_identifiers:
            S_identifiers.append(y)
        if y in operators and y not in S_operators:
            S_operators.append(y)
        if y in logical and y not in S_logical:
            S_logical.append(y)
        if y in other and y not in S_other:
            S_other.append(y)

        for x in y:
            if x in other and x not in S_other:
                S_other.append(x)
        if ";" in y and y[0:len(y)-1] not in identifiers:
            S_numerical.append(y[0:len(y)-1])


# output

print("\nKeywords: ", end="")
for i in S_keywords: print(i, end=", ")

print("\nidentifiers: ", end="")
for i in S_identifiers: print(i, end=", ")

print("\nMath Operators: ", end="")
for i in S_operators: print(i, end=", ")

print("\nlogical operators: ", end="")
for i in S_logical: print(i, end=" ")

print("numerical values:", end="")
for i in S_numerical: print(i, end=", ")

print('\nothers: ', end="")
for i in S_other: print(i, end=" ")