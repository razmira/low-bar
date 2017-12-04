# Lowbar 

Lowbar is an exercise in re-implementing some of the Underscore.js library using native JavaScript.

## Objectives

Learn and practise the following:
                
1. Test-driven development (TDD) - both the process and the
tools
2. Get an 'inside view' of one of the most heavily used JavaScript libraries
[underscore](http://underscorejs.org/) (11m downloads on NPM last month) and get used to reading its API documentation.

Below is a list of the Underscore functions that were re-implemented in this project using native JavaScript (displayed as they appear in the Underscore libray):

### identity 
```
_.identity(value)
```
* Returns the same value that is used as the argument. In math: f(x) = x
This function looks useless, but is used throughout Underscore as a default iteratee. 

### first 
```
_.first(array, [n]) Aliases: head, take
```
* Returns the first element of an array. Passing n will return the first n elements of the array. 

### last
```
_.last(array, [n])
```
* Returns the last element of an array. Passing n will return the last n elements of the array. 

### each
```
_.each(list, iteratee, [context]) Alias: forEach
```
* Iterates over a list of elements, yielding each in turn to an iteratee function. The iteratee is bound to the context object, if one is passed. Each invocation of iteratee is called with three arguments: (element, index, list). If list is a JavaScript object, iteratee's arguments will be (value, key, list). Returns the list for chaining. 

### lastIndexOf
```
_.lastIndexOf(array, value, [fromIndex])
```
* Returns the index of the last occurrence of value in the array, or -1 if value is not present. Pass fromIndex to start your search at a given index. 

### filter
```
_.filter(list, predicate, [context]) Alias: select
```
* Looks through each value in the list, returning an array of all the values that pass a truth test (predicate). 

### reject
```
_.reject(list, predicate, [context])
```
* Returns the values in list without the elements that the truth test (predicate) passes. The opposite of filter. 

### uniq
```
_.uniq(array, [isSorted], [iteratee]) Alias: unique
```
* Produces a duplicate-free version of the array, using === to test object equality. In particular only the first occurence of each value is kept. If you know in advance that the array is sorted, passing true for isSorted will run a much faster algorithm. If you want to compute unique items based on a transformation, pass an iteratee function. 

### map
```
_.map(list, iteratee, [context]) Alias: collect
```
* Produces a new array of values by mapping each value in list through a transformation function (iteratee). The iteratee is passed three arguments: the value, then the index (or key) of the iteration, and finally a reference to the entire list. 

### contains
```
_.contains(list, value, [fromIndex]) Alias: includes
```
* Returns true if the value is present in the list. Uses indexOf internally, if list is an Array. Use fromIndex to start your search at a given index. 

### pluck
```
_.pluck(list, propertyName)
```
* A convenient version of what is perhaps the most common use-case for map: extracting a list of property values. 

### reduce
```
_.reduce(list, iteratee, [memo], [context]) Aliases: inject, foldl
```
* Also known as inject and foldl, reduce boils down a list of values into a single value. Memo is the initial state of the reduction, and each successive step of it should be returned by iteratee. The iteratee is passed four arguments: the memo, then the value and index (or key) of the iteration, and finally a reference to the entire list. 

### every
```
_.every(list, [predicate], [context]) Alias: all
```
* Returns true if all of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a false element is found. 

### some
```
_.some(list, [predicate], [context]) Alias: any
```
* Returns true if any of the values in the list pass the predicate truth test. Short-circuits and stops traversing the list if a true element is found. 

### extend
```
_.extend(destination, *sources)
```
* Shallowly copy all of the properties in the source objects over to the destination object, and return the destination object. Any nested objects or arrays will be copied by reference, not duplicated. It's in-order, so the last source will override properties of the same name in previous arguments. 

### defaults
```
_.defaults(object, *defaults)
```
* Fill in undefined properties in object with the first value present in the following list of defaults objects. 

### once
```
_.once(function)
```
* Creates a version of the function that can only be called one time. Repeated calls to the modified function will have no effect, returning the value from the original call. Useful for initialization functions, instead of having to set a boolean flag and then check it later. 

### shuffle
```
_.shuffle(list)
```
* Returns a shuffled copy of the list, using a version of the Fisher-Yates shuffle. 

### invoke
```
_.invoke(list, methodName, *arguments)
```
* Calls the method named by methodName on each value in the list. Any extra arguments passed to invoke will be forwarded on to the method invocation. 

### delay
```
_.delay(function, wait, *arguments)
```
* Much like setTimeout, invokes function after wait milliseconds. If you pass the optional arguments, they will be forwarded on to the function when it is invoked. 

### intersection
```
_.intersection(*arrays)
```
* Computes the list of values that are the intersection of all the arrays. Each value in the result is present in each of the arrays. 

### difference
```
_.difference(array, *others)
```
* Similar to without, but returns the values from array that are not present in the other arrays. 

### flatten
```
_.flatten(array, [shallow])
```
* Flattens a nested array (the nesting can be to any depth). If you pass shallow, the array will only be flattened a single level. 

### sortedIndex
```
_.sortedIndex(list, value, [iteratee], [context])
```
* Uses a binary search to determine the index at which the value should be inserted into the list in order to maintain the list's sorted order. If an iteratee function is provided, it will be used to compute the sort ranking of each value, including the value you pass. The iteratee may also be the string name of the property to sort by (eg. length). 

### zip
```
_.zip(*arrays)
```
* Merges together the values of each of the arrays with the values at the corresponding position. Useful when you have separate data sources that are coordinated through matching array indexes. Use with apply to pass in an array of arrays. If you're working with a matrix of nested arrays, this can be used to transpose the matrix. 

### sortBy
```
_.sortBy(list, iteratee, [context])
```
* Returns a (stably) sorted copy of list, ranked in ascending order by the results of running each value through iteratee. iteratee may also be the string name of the property to sort by (eg. length). 

### memoize
```
_.memoizefunction, [hashFunction])
```
* Memoizes a given function by caching the computed result. Useful for speeding up slow-running computations. If passed an optional hashFunction, it will be used to compute the hash key for storing the result, based on the arguments to the original function. The default hashFunction just uses the first argument to the memoized function as the key. The cache of memoized values is available as the cache property on the returned function. 

## Getting Started (quick guide)

1. Clone the Lowbar repo to new local directory:
```
git clone https://github.com/ashcode1/Lowbar.git
```
2. Install dependencies in your new directory:
```
npm install
```
3. Run the tests:
```
npm test
```

## Getting Started (detailed guide)

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

To install this programme you will first need a commandline terminal such as **iTerm2** (for Mac) or **Terminator** (Linux/Unbuntu/Fedora) - or something similar. For more info on using the commandline see this [blog article](https://lifehacker.com/5633909/who-needs-a-mouse-learn-to-use-the-command-line-for-almost-anything)

You will then need to install the following:

* Node.js 
* NPM

Check if Node.js is already installed by typing the following into the commandline (without the dollar sign):

```
$ node -v 
```

To install Node.js follow these [instructions](https://nodejs.org/en/download/package-manager/#osx)

Check if NPM is installed:

```
$ npm -v
```

To install NPM follow these [instructions](https://docs.npmjs.com/getting-started/installing-node)

### 

**Clone the repo** 

* Click the green button towards the top right of the GitHub Lowbar repository page
* Click the "Copy to clipboard" button
* On your machine navigate to your chosen folder using the commandline and paste in the link you just copied from the repo at the end of the following command:
```
$ git clone 
```
eg. 

```
$ git clone https://github.com/ashcode1/Lowbar.git
```

**Install dependencies**

In your new directory run the following command:

```
$ npm install
```

## Running the tests

In the same directory run the following command:

```
$ npm test
```

## Built With

* [Node.js](https://nodejs.org/en/) 
* [Mocha](https://mochajs.org/) 
* [Chai](http://chaijs.com/) 
* [Sinon](http://sinonjs.org/)
* [npm](https://www.npmjs.com/)

## Authors

* **Ashley Hopkins** - [github](https://github.com/ashcode1)

## License

This project is licensed under the MIT License

## Acknowledgments

* The [Northcoders](https://northcoders.com/start-coding?ads_cmpid=949839241&ads_adid=47028772797&ads_matchtype=b&ads_network=g&ads_creative=228828910521&utm_term=northcoders&ads_targetid=kwd-375530169794&utm_campaign=&utm_source=adwords&utm_medium=ppc&ttv=2&gclid=Cj0KCQjwp_DPBRCZARIsAGOZYBT3fLL0ytyxD4YrK04zMgVM0T8YqqXfcIeKyjTQ61QL3UEpZk1K_ToaAmiCEALw_wcB) team for setting the challenge of this project and for creating and supporting an amazing network of developers in the north 

* The [Underscore](https://github.com/jashkenas/underscore) team for building an awsome JavaScript library! 
