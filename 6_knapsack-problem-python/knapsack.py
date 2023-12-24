items = ["A", "B", "C", "D", "E"]
weight = [10, 20, 30, 40, 50]
value = [60, 100, 120, 160, 200]
items_added = []

max_weight = 50
c = max_weight

height = len(weight) + 1 # number of items + 1
width = max_weight + 1 # number of weights + 1

knapsack_table = [[0 for _ in range(width)] for _ in range(height)] # 2D array of zeros

for i in range(1, height): # skip first row, for each item
  for c in range(width): # skip first column, for each weight
    if c >= weight[i-1]: # if the current weight is greater than or equal to the current item's weight
      # set the current cell to the max of:
      knapsack_table[i][c] = max(knapsack_table[i-1][c], # the cell above it
                                  knapsack_table[i-1][c-weight[i-1]] + value[i-1]) 
      # the cell in the current row, but in the column that is the current weight minus the current item's weight, plus the value of the current item
    else: # if the current weight is less than the current item's weight
      knapsack_table[i][c] = knapsack_table[i-1][c] # set the current cell to the cell above it

for i in range(len(weight), 0, -1): # for each item, starting at the last item
  if knapsack_table[i][c] != knapsack_table[i-1][c]: # if the current cell is not equal to the cell above it
    items_added.append(items[i-1]) # add the current item to the list of items added
    c -= weight[i-1] # subtract the current item's weight from the max weight

print("Items added: ", items_added)