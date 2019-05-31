import sys 
import os

# ============= Paquetes para el manejo de datos ===============
import numpy as np # linear algebra
import pandas as pd # data processing, CSV file I/O (e.g. pd.read_csv)
from sklearn import model_selection
import matplotlib as ptl
import build_information as build


#============= Paquetes para los algoritmos de Machine Learning =============
from sklearn.linear_model import LogisticRegression     # Es un algoritmo de regresion logistica
from sklearn.svm import SVC, LinearSVC                  # Es un algoritmo de clasificacion lineal
from sklearn.ensemble import RandomForestClassifier     # Es un algoritmo utilizando arboles de decision
from sklearn.neighbors import KNeighborsClassifier      # Es un algoritmo de agrupamiento usando arboles
from sklearn.naive_bayes import GaussianNB              # Es un algoritmo de clasificacion 

# Obtenemos los datos de la prediccion del usuario
userPreferences = sys.argv[1]

# Obtenemos la base de datos en un dataframe
dataframe = pd.read_csv('./dataframeTribargo.csv')

# Eliminamos aquellos datos que puedan tener valores nulos o NA
dataframe = dataframe.dropna()
# Separamos los datos de entrada con respecto a los datos de salida
# Esto puede verse como una funcion Y = f(X) con el fin obtener los datos
X = pd.get_dummies(dataframe.loc[:,dataframe.columns != 'bar'])
y = dataframe.bar

# Se separon estos datos en el conjunto de entrenamiento y el 
# conjunto de prueba con sus respectivas salidas para las predicciones
# contemplando 33% para el conjunto de prueba y 77% para el de entrenamiento
X_train,X_test,y_train,y_test=model_selection.train_test_split(X,y,test_size=0.33,stratify=y)

# Evaluamos la precision del modelo con el algoritmo RandomForestClassifier
# Ya que al evaluar los distintos algoritmos, el que mejor porcentaje de 
# exactitud tiene es éste. Sin embargo, es importante destacar que tiene overfitting.
random_forest = RandomForestClassifier(n_estimators=100)
random_forest.fit(X_train, y_train)
Y_pred = random_forest.predict(X_test)
random_forest.score(X_train, y_train)
random_forest.score(X_test, y_test)


print()

"""
# Takes first name and last name via command  
# line arguments and then display them 
print("Output from Python") 
print("First name: " + sys.argv[1]) 
print("Last name: " + sys.argv[2]) 
# save the script as hello.py 
"""
