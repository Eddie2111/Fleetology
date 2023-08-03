import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Card, Text, Spacer } from "@nextui-org/react";

type AuthData = {
  data: {
    result: [string, string][];
  };
};

type CoreData = {
  serial: string;
  email: string;
}[];

// request data has to be an object with two keys, email and serial
type RequestData = {
  email: string;
  serial: string;
};

export default function Index() {
  const [authlist, setAuthlist] = useState<[string, string][]>([]);
  const [corelist, setCorelist] = useState<CoreData>([]);
  const [filteredlist, setFilteredlist] = useState<CoreData>([]);

  useEffect(() => {
    Promise.all([Auth(), Core()]).then(() => {
      console.log('done');
    });
  }, []);

  const Auth = async (): Promise<void> => {
    await axios.get<AuthData>(process.env.NEXT_PUBLIC_AUTHAPI+"getallmanager").then((res: AxiosResponse<AuthData>) => {
      console.log('datafromauth',res.data.data.result);
      setAuthlist(res.data.data.result);
    });
  };

  const Core = async (): Promise<void> => {
    await axios.get<CoreData>("api/manager").then((res: AxiosResponse<CoreData>) => {
      console.log('datafromcore', res.data);
      setCorelist(res.data);
    });
  };

  const filteringLists = (): void => {
    const coreSet = new Set(corelist.map(item => item.serial));
    const filteredAuthList = authlist.filter(item => !coreSet.has(item[0]) && !coreSet.has(item[1]));
    
    const store: CoreData = filteredAuthList.map(item => ({ serial: item[0], email: item[1] }));
    console.log('filtered lists');
    setFilteredlist(store);
  };

  const acceptRequest = async (serial:string, email:string): Promise<void> => {
    console.log('accept request:',serial);
    const dataset:RequestData = { serial, email};
    await axios.post("api/requests",{
      dataset, command:"accept manager"
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{ console.log(err.message) });
  }

  const rejectRequest = async (serial:string, email:string): Promise<void> =>  {
    console.log('delete request',serial);
    await axios.post("api/requests",{
      serial:serial, command:"reject manager"
    }).then((res)=>{
      console.log(res);
    }).catch((err)=>{ console.log(err.message) });
  }
    // using useMemo for filteringLists
    useMemo(() => {
      
        filteringLists();
      
    }
    , [corelist,authlist]);

  return (
    <div>
      Admin
      <Card css={{ mw: "400px", height: "350px" }}>
        <Card.Header>
          <Text h3>Pending managers</Text>
        </Card.Header>
        <Card.Body>
          <div className="flex flex-col overflow-y-auto bg-gray-200 p-2 rounded-md">
            {filteredlist.length > 0 ? (
              filteredlist.map((auth) => (
                <div className="flex flex-col justify-between" key={auth.serial}>
                  <Text>Serial: {auth.serial}</Text>
                  <Text>Email: {auth.email}</Text>
                  <div className="flex flex-row">
                    <button
                      onClick= {async()=>await acceptRequest(auth.serial,auth.email)}
                      className="bg-green-400 h-8 w-[150px] mx-12 rounded-md hover:bg-green-500 active:bg-green-600 focus:outline-none focus:ring focus:ring-green-300">
                      Accept
                    </button>
                    <button 
                      onClick= {async()=>await rejectRequest(auth.serial,auth.email)}
                      className="bg-red-400 h-8 w-[150px] mx-12 rounded-md hover:bg-red-500 active:bg-red-600 focus:outline-none focus:ring focus:ring-red-300">
                      Reject
                    </button>
                  </div>
                  <div className="h-[1px] my-4 w-76 bg-gray-200 rounded-lg">&nbsp;</div>
                </div>
              ))
            ) : (
              <Text>No Requests Pending</Text>
            )}
          </div>
        </Card.Body>
        <Card.Footer>
          <Text>Footer</Text>
        </Card.Footer>
      </Card>
    </div>
  );
}
