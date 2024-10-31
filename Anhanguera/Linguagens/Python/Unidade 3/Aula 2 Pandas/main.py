import pandas as pd

# Criando uma lista de valores
data1 = [1, 2, 3, 4, 5, 6, 7]

# Criando uma Series a partir da lista
series1 = pd.Series(data1)

print(series1)


# ------------------------------------Criando um dicionário com pares chave-valor--------------------------------------------------------------------
import pandas as pd

data2 = {'A': 100, 'B': 200, 'C': 300, 'D': 400, 'E': 500}

# Criando uma Series a partir do dicionário
series2 = pd.Series(data2)

print(series2)


#------------------------------------Importando dados de uma tabela em uma página web------------------------------------------------------------------
import pandas as pd

url = 'https://www.fdic.gov/resources/resolutions/bank-failures/failed-bank-list/'

dfs = pd.read_html(url)

print(type(dfs))

print(len(dfs))

df_bancos = dfs[0]

print(df_bancos.shape)

print(df_bancos.dtypes)

df_bancos.head()
