
import { json } from "node:stream/consumers";
export default class StudentsController {
    students=[
        {"id":1,"firstname":"tchalla","lastname":"phanie","sexe":"F","birth_day":"01/02/2000"}
    ];

    async create(req,res){
        /*let body="";
        req.on('data',(chunk)=>{
            //console.log(chunk.toString());
            body += chunk.toString();
        });
        req.on('close',()=>{
            console.log(JSON.stringify(body));
            
        })
        res.end("");*/

        const body= await json(req);
        this.students.push(body)
        //console.log(this.students);
        res.end(JSON.stringify(body));
        

        
    }
    
    read(req,res){
        res.writeHead(200);
        res.end(JSON.stringify(this.students)) ;
    }
    get(req,res){
        const url=new URL(req.url,`http://${req.headers.host}`);
        const id=url.searchParams.get("id");
        let student;
        //Rechercher l'etudiant 
        this.students.forEach((elt)=>{
            if (elt.id==id) {
                student=elt;
            }
        })


        if (student===undefined) {
            res.writeHead(404);
            res.end(JSON.stringify({
                "message":"Ressource not-found"
            }))
        }else{
            res.writeHead(200);
            res.end(JSON.stringify(student));
        }
        res.end("");

    }
    update(req,res){}

    delete(req,res){}




get(req,res){
        const url=new URL(req.url,`http://${req.headers.host}`);
        const id=url.searchParams.get("id");
        let student;
        //Rechercher l'etudiant 
        this.students.forEach((elt)=>{
            if (elt.id==id) {
                student=elt;
            }
        })


        if (student===undefined) {
            res.writeHead(404);
            res.end(JSON.stringify({
                "message":"Ressource not-found"
            }))
        }else{
            res.writeHead(200);
            res.end(JSON.stringify(student));
        }
        res.end("");

    }

}
    /*async update(req,res){
        const url=new URL(req.url,`http://${req.headers.host}`);
        const id=url.searchParams.get("id");
        const body= await json(req);
        let student;
        this.students.forEach((elt)=>{
            if (elt.id==id) {
                student=elt;
                this.students.forEach(element => {
                    element.firstname=body.firstname,
                    element.lastname=body.lastname,
                    element.birth_day=body.birth_day
                });
                
            }

            
        })

        if (student===undefined) {
            res.writeHead(404);
            res.end(JSON.stringify({
                "message":"Ressource not-found"
            }))
        }else{
            res.end(JSON.stringify(student));
        }
        res.end("");
       
    }

    delete(req,res){
        const url=new URL(req.url,`http://${req.headers.host}`);
        const id=url.searchParams.get("id");
        let student; 
        this.students.forEach((elt)=>{
            if (elt.id==id) {
                
                //console.log(id);
                
                const suppStudent=this.students.indexOf(id)
                //console.log(suppStudent);
                
                this.students.splice(suppStudent)
                
            }
            
        })
        if (student===undefined) {
            res.writeHead(404);
            res.end(JSON.stringify({
                "message":"Ressource not-found"
            }))
        }else{
            res.end(JSON.stringify(student));
        }
        res.end("");
    }

    read(req,res){
        res.writeHead(200);
        res.end(JSON.stringify(this.students)) ;
    }
}*/