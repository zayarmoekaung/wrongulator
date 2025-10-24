import type { SyntaxNode } from '../types/syntaxNode';
export default function calculateSyntaxTree(syntaxTree: SyntaxNode[]): number {
    if (!Array.isArray(syntaxTree)) {
        throw new TypeError('syntaxTree must be an array');
    }
    if (syntaxTree.length === 0) {
        throw new Error('Empty syntax tree');
    }

    let result = 0;
    let right = 0;
    let opFunc: ((a: number, b: number) => number) | null = null;

    for (const node of syntaxTree) {
        if (!node || typeof node !== 'object' || typeof node.type !== 'string') {
            throw new Error(`Invalid node encountered: ${JSON.stringify(node)}`);
        }

        if (node.type === 'number') {
            if (node.value == null) throw new Error('Number node missing value');
            right = parseFloat(String(node.value));
            if (Number.isNaN(right)) throw new Error(`Invalid number: ${node.value}`);
            if (opFunc) {
                if (opFunc === operations['/'] && right === 0) throw new Error('Division by zero');
                result = opFunc(result, right);
                opFunc = null;
            } else {
                result = right;
            }
        } else if (node.type === 'operator') {
            if (typeof node.value !== 'string') throw new Error('Operator node missing value');
            const func = operations[node.value];
            if (!func) throw new Error(`Unknown operator: ${node.value}`);
            opFunc = func;
        } else if (node.type === 'parenthesis') {
            if (!Array.isArray(node.children)) throw new Error('Parenthesis node missing children array');
            try {
                right = calculateSyntaxTree(node.children);
            } catch (e: any) {
                throw new Error(`Error evaluating parenthesis: ${e?.message ?? e}`);
            }
            if (opFunc) {
                if (opFunc === operations['/'] && right === 0) throw new Error('Division by zero');
                result = opFunc(result, right);
                opFunc = null;
            } else if (result !== 0) {
                result = result * right;
            } else {
                result = right;
            }
        } else {
            throw new Error(`Unknown node type: ${node.type}`);
        }
    }

    if (opFunc) {
        //throw new Error('Expression ends with an operator');
    }

    return result;
}
const operations: {[key: string]: (a: number, b: number) => number} = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
};

