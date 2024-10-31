import matplotlib.pyplot as plt
#dados
meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio']
vendas = [120, 90, 100, 40, 60]

#Criar Gráfico de Linha
plt.bar(meses, vendas, color = 'royalblue')


# Adicionar rótulos aos eixos
plt.xlabel('Mês')
plt.ylabel('Vendas (em Unidades)')

# Adicionar um título ao gráfico
plt.title('Vendas Mensais')

#Mostrar Gráfico
plt.show()