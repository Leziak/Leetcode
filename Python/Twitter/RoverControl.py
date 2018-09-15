def rover_control(matrixSize, cmds):

    def generate_matrix():
        matrix, row = [], []
        for n in range(0, matrixSize ** 2):
            row.append(n)
            if (n + 1) % matrixSize == 0:
                matrix.append(row)
                row = []
        return matrix

    def traverse_matrix(matrix, i=0, j=0):
        for cmd in cmds:
            if cmd == 'RIGHT' and j < matrixSize - 1: j += 1
            elif cmd == 'LEFT' and j > 0: j -= 1
            elif cmd == 'UP' and i > 0: i -= 1
            elif cmd == 'DOWN' and i < matrixSize - 1: i += 1
        return matrix[i][j]

    matrix = generate_matrix()

    return traverse_matrix(matrix)



print(rover_control(4,
        ['RIGHT', 'RIGHT','RIGHT','RIGHT','RIGHT','RIGHT']))