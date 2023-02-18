import pandas as pd
import os
from pathlib import Path

class ReadCSV:
    def main(self, csv_path=""):
        if not csv_path:
            current_path = os.path.dirname(os.path.abspath(__file__))
            data_dir_path = os.path.join(Path(current_path).parent,"data")
            csv_path = os.path.join(data_dir_path,"test.csv")
        else:
            csv_path = csv_path
        
        df_csv = pd.read_csv(csv_path)
        return df_csv.to_json()

if __name__=="__main__":
    RC = ReadCSV()
    RC.main()