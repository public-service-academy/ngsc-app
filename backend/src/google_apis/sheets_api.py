"""
Utilities for interfacing with Google Sheet's API.
"""

from typing import Any, List

from backend.src.google_apis import authentication


def batch_update(spreadsheet_id: str, requests: List) -> None:
    """
    Perform an operation on the spreadsheet.
    """
    sheets_service = authentication.build_service()
    body = {'requests': requests}
    sheets_service.spreadsheets() \
        .batchUpdate(
            spreadsheetId=spreadsheet_id,
            body=body) \
        .execute()


def get_values(spreadsheet_id: str, range_: str) -> List:
    """
    Query spreadsheet from provided range and return its values.
    """
    sheets_service = authentication.build_service()
    result = sheets_service.spreadsheets() \
        .values() \
        .get(
            spreadsheetId=spreadsheet_id,
            range=range_) \
        .execute()
    return result.get('values', [])


def read_cell(spreadsheet_id: str, range_: str) -> Any:
    """
    Query spreadsheet for specific cell return its values.
    """
    result = get_values(spreadsheet_id, range_)
    return result[0][0]


def update_cell(spreadsheet_id: str, range_: str, value: Any) -> None:
    """
    Update specific cell with given value.
    """
    sheets_service = authentication.build_service()
    body = {'values': [[value]]}
    sheets_service.spreadsheets() \
        .values() \
        .update(
            spreadsheetId=spreadsheet_id,
            range=range_,
            valueInputOption='USER_ENTERED',
            body=body) \
        .execute()
