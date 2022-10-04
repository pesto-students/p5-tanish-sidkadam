//Write a function called hasDuplicate which accepts an array and returns true or false if that arraycontains a duplicate


function hasDuplicate(myArray) 
    {
        for (var i = 0; i < myArray.length; i++) 
        {
            for (var j = 0; j < myArray.length; j++) 
            {
                if (i != j) 
                {
                    if (myArray[i] == myArray[j]) 
                    {
                        return true; // means there are duplicate values
                    }
                }
            }
        }
        return false; // means there are no duplicate values.
    }

    hasDuplicate([1,5,-1,4]) // false