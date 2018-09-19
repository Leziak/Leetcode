# Actually this one is from Codewars.

def validSolution(board):

    # validate rows
    rows = board[:]
    for row in rows:
        if not sorted(row) == list(range(1, 10)):
            return False
            
    # validate columns
    columns = [[row[i] for row in board] for i in range(9)]
    for col in columns:
        if not sorted(col) == list(range(1, 10)):
            return False
            
    # validate squares
    upper_rows = [rows[i][:3] + rows[i+1][:3] + rows[i+2][:3] for i in range(0, 7, 3)]
    middle_rows = [rows[i][3:6] + rows[i+1][3:6] + rows[i+2][3:6] for i in range(0, 7, 3)]
    bottom_rows = [rows[i][6:9] + rows[i+1][6:9] + rows[i+2][6:9] for i in range(0, 7, 3)]
    
    squares = upper_rows + middle_rows + bottom_rows
    
    return all([sorted(square) == list(range(1, 10)) for square in squares])
