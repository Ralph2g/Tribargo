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
    lista_musica = descomponer(musica)
    lista_promo = descomponer(promos)

    presupuesto = presupuesto.replace(',', '').strip()
    edad = edad.replace(',', '').strip()
    sexo = "femenino" if sexo.replace(',', '').strip() == "0" else "masculino"
    bar = bar.replace(',', '').strip()

    auxiliar = { "presupuesto" : presupuesto,
                 "edad" : edad,
                 "sexo" :  sexo ,
                 "bebidas" : lista_bebidas[0],
                 "musica" : lista_musica[0],
                 "promos" : lista_promo[0],
                 "bar" :  bar
                }
    s = pd.Series(auxiliar)
    p = pd.DataFrame(s)
    print(p)

preferencias = "1593,@,23,@,1,@,0,1,1,@,1,1,0,1,@,0,1,1,@,Mr Duck"
adaptar(preferencias)