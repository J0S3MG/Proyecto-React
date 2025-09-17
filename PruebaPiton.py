print("Hola puto")
a = 1
print(a)
a = "Tu vieja"
x = 4
y = 3
print(a)
a = x + y/ 2
print(a)

def function( x,y):
    a = x + y/ 2
    print(a)

function(1,2)

d = True
e = [1,2,3]
print(type(e))

for i in e: #Foreach
    print(i)
for i in range(len(e)): #For normal 
    print(i)

from abc import ABC, abstractmethod
class Persona:
    edad = 1
    nombre = ""
    def __init__(self,n,ed):
        self.edad = ed
        self.nombre = n
    def Descripcion(self):
        return f"{self.nombre};{self.edad}"
    
class Alumno(Persona):
    nota = 1.0
    def __init__(self, n, ed,no):
        super().__init__(n, ed)
        self.nota = no
    def Descripcion(self):
        return f"{super().Descripcion()};{self.nota}"

class Dibujo(ABC):

    def HolaMondo():
        print("Hola Bitch")
        
    @abstractmethod
    def MetodoAbstracto(self):
        """Este método debe ser implementado por las clases hijas."""
        pass

m = Persona("Manuel",11)
f = Alumno("Facu",12,8.5)
l = Alumno("Luiano",9,2.3)
s = Persona("Samuel",10)

pl = [m,f,l,s,]
for i in pl:
    print(i.Descripcion())
