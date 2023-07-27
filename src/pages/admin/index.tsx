import axios, { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Card, Text, Spacer } from "@nextui-org/react";

type AuthData = {
  data: {
    result: [string, string][];
  };
};

type CoreData = [string, string][];

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
    await axios.get<AuthData>("https://fleetology-auth.onrender.com/getallmanager").then((res: AxiosResponse<AuthData>) => {
      console.log(res.data.data.result);
      setAuthlist(res.data.data.result);
    });
  };

  const Core = async (): Promise<void> => {
    await axios.get<CoreData>("api/manager").then((res: AxiosResponse<CoreData>) => {
      console.log(res.data);
      setCorelist(res.data);
    });
  };

  const filteringLists = (): void => {
    // filter and store the lists that are not in core
    // declare an array named store in typescript
    let store: [string, string][] = [];
    authlist.forEach((auth) => {
      store.push(auth);
    });
    setFilteredlist(store);
  };

  useEffect(() => {
    filteringLists();
  }, [authlist]);

  return (
    <div>
      Admin
      <Card css={{ mw: "400px", height: "350px" }}>
        <Card.Header>
          <Text h3>Pending managers</Text>
        </Card.Header>
        <Card.Body>
          <div className="flex flex-col overflow-y-auto">
            {filteredlist.length > 0 ? (
              filteredlist.map((auth) => (
                <div className="flex flex-col justify-between" key={auth[0]}>
                  <Text>Serial: {auth[0]}</Text>
                  <Text>Email: {auth[1]}</Text>
                  <Spacer />
                </div>
              ))
            ) : (
              <Text>No data</Text>
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
