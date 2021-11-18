let nombre = prompt("De quel nombre veux-tu calculer la factorielle ? :");
function fact(nombre) 
{
  // Si nbr = 0 la factorielle retournera 1
  if (nombre === 0)
  {
     return 1;
  }
  // appelez à nouveau la procédure récursive
  return nombre * fact(nombre-1);
}
console.log(fact(nombre));
