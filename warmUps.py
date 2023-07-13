def celsiusToFahrenheit(cDegrees):
    fDegrees = (9/5 * cDegrees) + 32
    print(fDegrees)

celsiusToFahrenheit(35)

def makeItBig(arr):
    for i in range(len(arr)):
        if arr[i] > 0:
            arr[i] = "big"
    print(arr)

test1 = [1,2,3,-4,-5]

makeItBig(test1)