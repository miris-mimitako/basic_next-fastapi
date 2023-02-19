from sqlalchemy import create_engine
import pandas as pd
import os
from pathlib import Path
import sqlite3

class SQLread:
    def __init__(self, path_db = "") -> None:
        '''
        Path control
        '''
        if not path_db:
            path_current = os.path.dirname(os.path.abspath(__file__))
            path_data_dir = os.path.join(Path(path_current).parent,"data")
            path_db = os.path.join(path_data_dir,"test.sqlite3")
        else:
            path_db = path_db

        
        '''
        Other Engine connection
        '''
        # engine = create_engine(("sqlite:///" + path_db))
        # self.con = engine.connect()

        '''
        Sqlite3 engine connection
        '''
        self.conn = sqlite3.connect(path_db)


    def main(self):
        df = pd.read_sql("select * from test3", self.conn)
        json_df = df.to_json(orient="records")
        return json_df

    def create_sample(self):
        # test_sample = {"col1":[1,2,3,4,5],"col2":[2,4,6,8,10], "col3":["a","b","c","d","e"]}
        # df_test = pd.DataFrame(test_sample)

        data = {'id': [1, 2, 3],
        'name': ['Alice', 'Bob', 'Charlie'],
        'age': [25, 30, 35]}
        df = pd.DataFrame(data)
        df.to_sql("test3", con = self.conn, if_exists='append', index=False)

if __name__=="__main__":
    SR = SQLread()
    SR.main()