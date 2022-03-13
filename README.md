# node-notes-app
Simple NodeJS notes app (for studies)

---

# Usage:
### Add a note:
node app.js add --title="Receita de bolo ainda melhor de vdd"  --body="Minha receita precisa de 8 ovos e acucar"

### List notes:
node app.js list

### Read a note:
node app.js read --title="Receita de bolo ainda melhor de vdd"    

#### Delete a note:
node app.js del --title="Receita de bolo ainda melhor de vdd"    

## How to debug
- Add "debugger" to the point where the debug needs to be done
- Add "inspect" before terminal command (ex: node inspect app.js add --tit(...))
- Open at chrome://inspect/#devices 
