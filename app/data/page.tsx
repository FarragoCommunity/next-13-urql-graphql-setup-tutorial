
import {
    AllFilmsDocument,
    AllFilmsQuery,
    VehiclesQuery,
    VehiclesDocument,
    VehiclesQueryVariables,
    AllFilmsQueryVariables,
    CreateTodoMutation,
    CreateTodoMutationVariables,
    CreateTodoDocument,
  } from "@/graphql/operations";
  import { getUrqlClient } from "@/lib/urql";
import { Suspense } from "react";
import Loading from "./loading";
import Form from "@/components/Form";
  
  async function getAllFilms() {
    console.log("getting al films");
    
    const { client } = getUrqlClient();
    const result = await client.query<AllFilmsQuery, AllFilmsQueryVariables>(
      AllFilmsDocument,
      {}
    );
    return result;
  }

  async function getAllVehicles(){
    const {client} = getUrqlClient();
    const result = await client.query<VehiclesQuery , VehiclesQueryVariables>(
      VehiclesDocument,
      {}
    )
    return result
  }

  async function createTodo(id : string , name : string){
    "use server"
    const {client} = getUrqlClient();
    const result = await client.mutation<CreateTodoMutation , CreateTodoMutationVariables>(
      CreateTodoDocument,
      {
      description : name,
       done : true ,
      id : id
      }
    )
    return result
  }
  
  export default async function Data() {
    const { data, error } = await getAllFilms();

    // const {data , error} = await createTodo();
  
    data?.users;
    return (
      <div>

        <Form key={1} createTodo={createTodo}/>
        
        {/* <Suspense fallback={<Loading/>}> */}
        {error && <p>{error.message}</p>}
        {data && <pre>{JSON.stringify(data, null , 4)}</pre>}
      {/* </Suspense> */}

        
      </div>
    );
  }
  