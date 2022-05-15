# Inputs und useEffect

## OrderForm
1. Füge im OrderForm zwei weitere Range-Inputs hinzu (Hamburger, Eis)
2. Man kann nur zu Schritt zwei, wenn mindestens ein Produkt gewählt ist. Aktualisiere dazu das "useEffect".
3. Zeige immer sofort die Summe aller Preise dort an wo jetzt X,XX steht.
4. Ändere den folgenden Code so, dass alle Produkte und der Preis an OrderData übergeben werden. 

        props.setOrderData({
                           cola:cola,
                           preis:0})
                       }

## UserForm
5. Aktiviere den "Zurück Button" (Es ist normal, dass im OrderForm, dann alles wieder auf 0 ist)
6. Aktiviere den "Bestellung abschließen"-Button.
7. Füge im UserForm die Felder Age, Phone und E-Mail ein und orientiere dich an dem Feld Name

## App.js und mehr
8. Erstelle eine neue Komponente die bei "currentStep==3" angezeigt wird
9. Zeige in diese Komponente folgendes an: 
   
        Danke für deine Bestellung
        Burger: x, Cola: x, Eis: x, Preis: x,
        Name: xxxxx xxxx, Alter: xx, E-Mail: xx@xx.xx, Tel: xxxxxxxx
        
## Validierung
10. Implementiere Funktionen folgendes zu validieren und gib vernünftige Hilfe-Nachrichten aus: 
    1. e-mails (xxxx@xxxx.de)
    2. telefon (zb nur zahlen oder nur zahlen und - / ())
    3. Alter (mindestens 18Jahre alt) 
    4. Namen (Überleg dir selbst etwas)
