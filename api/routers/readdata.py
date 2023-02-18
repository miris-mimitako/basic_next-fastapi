from fastapi import APIRouter
import os
from pathlib import Path
current_path = os.path.dirname(os.path.abspath(__file__))
append_path = os.path.join(Path(current_path).parent.parent,"modules")
import sys
sys.path.append(append_path)
from modules import readcsv as rcsv


router = APIRouter()

@router.get("/read_csv/", tags=["csv"])
async def read_csv():
    RCSV = rcsv.ReadCSV()
    res = RCSV.main()
    return res