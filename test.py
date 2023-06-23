from enum import Enum

class Color(Enum):
    YELLOW  = 1
    WHITE   = 2
    BLACK   = 3

class person:
    def __init__(self, name: str, age: int, color: Color):
        self.name = name
        self.age = age
        self.color = color
    def age(self) -> int:
        return self.age
    def name(self) -> str:
        return self.name
    def color(self) -> Color:
        return self.color
    def serial(self, value: int) -> str:
        return str(value)
    
class Child(person):
    def __init__(self, name: str, color: Color, serial: int, age:int, parent: person):
        super().__init__(name, age, color)
        self.parent = parent
    def parent(self) -> str:
        return self.parent
    def get_serial(self, value: int) -> str:
        return str(value) + "→ child"
    def get_color(self, value: Color) -> str:
        return str(value) + "→ child"
        
person1 = person("John", 20, Color.YELLOW)
person2 = person("Mary", 30, Color.WHITE)
person3 = person("Peter", 40, Color.BLACK)

child1 = Child("John", Color.YELLOW, 12345,21, person1)


# creating an event based chat app example

class Server:

    def __init__(self) -> None:
        self.queue = {}
        pass
    def send(self, user: str, message: str) -> None:
        self.user = user
        self.message = message
        self.queue [user] = message
    def get_message(self) -> str:
        return self.queue
    def get_message_for_user(self, user: str) -> str:
        message_list : list = []
        if user not in self.queue: print("no new message")
        else: 
            for i in self.queue: 
                if i != user: message_list.append([i,self.queue[i]])
            print("new message")
            print(message_list)
        return self.queue[user]

room1 = Server()
room2 = Server()

room1.send("John", "Hello")
room1.send("Mary", "Hi")
room2.send("Taylor", "hola");


# print(room1.get_message_for_user(input("user name:?  →")))
# print(room2.get_message_for_user(input("user name:?  →")))
# print(room2.get_message())

### create a layered( microservice )
true, false = True, False

# microservice
class Node:
    def __init__(self) -> None:
        # layer logic
        self.ui = False
        self.auth = False
        self.business = ["get", "post", "put", "delete"]   # accepted commands

        pass
    def Front(self, button: bool) -> bool:              # layer -> 1
        self.button = button ### using this as CSRF
        if self.button: self.ui = True
        return self.button or False
    
    def Auth(self, user: str) -> str:                   # layer -> 2
        # return true if the self.auth is true
        # return false if the self.auth is false
        self.user = user
        if self.ui: self.auth = True; return True
        else: return False

    def business_logic(self, command: str) -> str:      # layer -> 3
        self.command = command
        if self.user:
            if self.command in self.business:  return true or False
    

## created three nodes
node1 = Node()
node2 = Node()
node3 = Node()

# user-> 1 press the button
node1.Front(true)
node1.Auth("4fh4389hf9483")
node1.business_logic("post")

#######################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################################
## dfs
graph = {
    'A': ['B', 'C'],
    'B': ['A', 'D', 'E'],
    'C': ['A', 'F'],
    'D': ['B'],
    'E': ['B', 'F'],
    'F': ['C', 'E'],
}
def dfs(graph, target):
    visited = []
    for i in graph:
        if i == target: return 'reached'
        else: 
            visited.append(i)
    pass


