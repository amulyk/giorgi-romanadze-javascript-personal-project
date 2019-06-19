export function validate(schema,data, flag = true) 
{
  if (flag == false)
  {
    for (var i = 0; i < Object.keys(schema).length ; i++)
    {
      if(Array.isArray(data[Object.keys(data)[i]]))
      {
        for (let i = 0 ; i < data[Object.keys(data)[i]].length ; i++)
        {
          validate (schema[Object.keys(schema)[0]] , data[Object.keys(data)[i]])
        }
      }
    }
  }
    else 
    {
      for (var i = 0; i < Object.keys(schema).length ; i++)
    {
      if(Array.isArray(data[Object.keys(data)[i]]))
      {
          for (let i = 0 ; i < data[Object.keys(data)[i]].length ; i++)
              validate (schema[Object.keys(schema)[0]] , data[Object.keys(data)[i]], true)
      }
    }
  }
    return true
}


