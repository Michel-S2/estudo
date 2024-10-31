# class Pessoa:
#   def __init__(self, nome, idade, genero):
#     self.nome = nome
#     self.idade = idade
#     self.genero = genero
#   def cumprimentar(self):
#     return f'Olá me chamo {self.nome}'
#   def aniversario(self):
#     self.idade += 1

# pessoa1 = Pessoa('Michel', 21, 'Homem')
# print(f'Minha idade é {pessoa1.idade}')
# pessoa1.aniversario()
# print(f'Nova idade: {pessoa1.idade}')

class Animal:
    def __init__(self, nome, raca):
        self.nome = nome
        self.raca = raca
    def fazer_barulho(self):
        pass

class Cachorro(Animal):
    def fazer_barulho(self):
        return 'Au Au'
    
class Gato(Animal):
    def fazer_barulho(self):
        return 'Miau Miau'
    

cachorro1 = Cachorro('Bob', 'Husky')
gato1 = Gato('Mimi', 'Pug')
print(cachorro1.fazer_barulho())
print(gato1.fazer_barulho())
    