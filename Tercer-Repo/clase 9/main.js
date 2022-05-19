class  nodo{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }

}
class binartTree {

    constructor(root = null){
            this.root = root;
    }

    insert(node){
        if(this.root == root){
            this.root = node;
        }else
        {
            let  current = this.root;
            
            while(true){
                if(current.data < node.data){
                    if(current.right == null){
                        current.right = node
                    }else
                    {
                        current =  current.right;
                        break;
                    }
                    current = current.right;
                }else{
                    current = current.left;
                    break;
                }
            }
            if(this.root.data < node.data){

                let current = this.root.left;


                
                if(current.data < node.data){
                    current.right = node;
                }else
                {
                    current.left = node;
                }
                //this.root.right = node;
            }else
            {
                let current = this.root.right;
                if(current.data < node.data){
                    current.right = node;
                }else
                {
                    current.left = node;
                }
            }
        }
    }

    search(data){
        let current = this.root.left;
        while(current.data !== data){
            if(current.data < nodo.data){
                current= current.right
            }else
            {
                current = current.left;
            }

        }
        return current;
    }
}