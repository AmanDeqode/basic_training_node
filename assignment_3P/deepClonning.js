function clone(item) {
        if (!item) { return item; }
    
      
            let result;
    
            if (Object.prototype.toString.call( item ) === "[object Array]") {
                result = [];
                item.forEach(function(child, index, array) { 
                    result[index] = clone( child );
                    //console.log('array',result[index])
                });
            } else if (typeof item == "object") {
                 if (!item.prototype) { 
                    if (item instanceof Date) {
                        result = new Date(item);
                        //console.log('3',result);
                    } else {
                        result = {};
                        for (var i in item) {
                            result[i] = clone( item[i] );
                            //console.log('object',result[i]);
                        }
                    }
                } 
            } else {
                result = item;
                //console.log('2',result);
            }
    
        return result;
    }
    
    
    
    
    clone(company);
    
    console.log(deepClone(company));