function Sum(x: number, y: number): number {
  return x + y;
}

function OldSum(x, y) {
  return x + y;
}

console.log(Sum(2, 5));
console.log(OldSum("a", "b"));
console.log(OldSum("a", 2));

function Sum2(x: number, y: number = 0): number {
  return x + y;
}

console.log(Sum2(2));

function Sum3(x: number, y?: number): number {
  if (y) {
    return x + y;
  }
  return x;
}

console.log(Sum3(8));
console.log(Sum3(15, 8));

function invitePeople(firstInvitedPerson: string, ...others: string[]): string {
  return firstInvitedPerson + " " + others.join(" ");
}

console.log(invitePeople("Aleyna", "Ada", "Semra", "Turgay"));
