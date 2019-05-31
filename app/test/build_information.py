import pandas as pd

def descomponer( cadena ):
    aux = []
    for i in cadena:
        if (i) != ",":
              aux.append(i)
    return aux

def adaptar( preferencias ):
    presupuesto, edad, sexo, bebidas,musica, promos, bar = preferencias.split("@")
    lista_bebidas = descomponer(bebidas)
    lista_musica = descomponer(music)
    lista_bebidas = descomponer(promos)

    auxiliar = { "presupuesto" : presupuesto.replace(',', '').strip(),
                 "edad" : edad.replace(',', '').strip(),
                 "sexo" : "femenino" if sexo.replace(',', '').strip() == "0" else "masculino" ,
                 "bebidas" : ,
                 "musica" : ,
                 "promos" : ,
                 "bar" : bar.replace(',', '').strip() 
                }
    s = pd.DataFrame(auxiliar)
    print(s)

preferencias = "1593,@,23,@,1,@,0,1,1,@,1,1,0,1,@,0,1,1,@,Mr Duck"
adaptar(preferencias)