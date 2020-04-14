import { uuid } from 'uuidv4';
import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
// import transactionRouter from '../routes/transaction.routes';

interface RequestDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}
class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: RequestDTO): Transaction {
    const receberiddarota = uuid();
    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    if (receberiddarota) {
      throw Error('This transaction is alread');
    }

    return transaction;
  }
}

export default CreateTransactionService;
